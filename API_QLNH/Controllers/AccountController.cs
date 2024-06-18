using API_QLNH.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace API_QLNH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public AccountController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpPost]
        public JsonResult Login(Account account)
        {
            string query = string.Format("Select count(*) from dbo.Account Where UserName='{0}' AND Password='{1}'", account.UserName,account.Password);
            DataTable table = new DataTable();
            string? sqlDataSource = _configuration.GetConnectionString("QLNH");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            if (table.Rows.Count>0 && (int)table.Rows[0][0] >0)
            {
            return new JsonResult(new {success= true, data = account });

            }
            else
            {
                return new JsonResult(new { success = false, data = account });

            }

        }
    }
}
