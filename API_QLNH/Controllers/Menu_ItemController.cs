using API_QLNH.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace API_QLNH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Menu_ItemController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public Menu_ItemController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
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
            string query = string.Format("Insert into dbo.Menu_Item (Menu_ItemName, MenuName, Menu_ItemImg) Values (N'{0}',N'{1}','{2}')", menuItem.Menu_ItemName, menuItem.MenuName, menuItem.Menu_ItemImg);
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
            string query = string.Format("Update dbo.Menu_Item Set Menu_ItemName = N'{0}', MenuName = N'{1}', Menu_ItemImg = '{2}' WHERE Menu_ItemID = {3} ",
                menuItem.Menu_ItemName, menuItem.MenuName, menuItem.Menu_ItemImg, menuItem.Menu_ItemID);
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
        public JsonResult Delete(string Menu_ItemID)
        {
            string query = string.Format("Delete From dbo.Menu_Item Where Menu_ItemID = {0}", Menu_ItemID);
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
        [Route("LoadImg")]
        
        [HttpPost]
        public JsonResult LoadImg()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Img/" + fileName;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(fileName);

            }
            catch (Exception)
            {
                return new JsonResult("menuItem0.jpg");
            }
            
        }

        [Route("GetAllMenuName")]
        [HttpGet]
        public JsonResult GetAllMenuName()
        {
            string query = "Select MenuName from dbo.Menu";
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
    }
}
