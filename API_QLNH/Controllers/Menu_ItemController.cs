using API_QLNH.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace API_QLNH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Menu_ItemController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public Menu_ItemController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = "Select * from dbo.Menu_Item";
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
            return new JsonResult(table);

        }
        [HttpPost]
        public JsonResult Post(Menu_Item menuItem)
        {
            string query = string.Format("Insert into dbo.Menu_Item Values (N'{0}',{1},'{2}','{3}')", menuItem.Menu_ItemName, menuItem.MenuID, menuItem.Menu_ItemStartDate, menuItem.Menu_ItemPhoto);
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
            return new JsonResult("Thêm mới thành công");
        }

        [HttpPut]
        public JsonResult Put(Menu_Item menuItem)
        {
            string query = string.Format("Update dbo.Menu_Item Set Menu_ItemName = N'{0}', MenuID = {1}, Menu_ItemStartDate = '{2}', Menu_ItemPhoto = '{3}' WHERE Menu_ItemID = {4} ",
                menuItem.Menu_ItemName, menuItem.MenuID, menuItem.Menu_ItemStartDate, menuItem.Menu_ItemPhoto, menuItem.Menu_ItemID);
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
            return new JsonResult("Cập nhật thành công");
        }
        [HttpDelete]
        public JsonResult Delete(Menu_Item menuItem)
        {
            string query = string.Format("Delete From dbo.Menu_Item Where Menu_ItemID = {0}", menuItem.Menu_ItemID);
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
            return new JsonResult("Xóa thành công");
        }
    }
}
