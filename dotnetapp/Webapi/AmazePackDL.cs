using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
namespace Webapi
{

    internal class AmazePackDL
    {
        SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=AmazePack;trusted_connection=false;Persist Security Info =False;Encrypt=False");
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;
        SqlDataReader dr = null;

        internal List<ProductModel> GetProduct()
        {

            List<ProductModel> l = new List<ProductModel>();
            cmd = new SqlCommand("select * from Products", con);
            adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            con.Open();
            adapter.Fill(dt);
            con.Close();
            foreach (DataRow dr in dt.Rows)
            {
                ProductModel product = new ProductModel();
                product.id = int.Parse(dr["id"].ToString());
                product.productname = dr["productname"].ToString();
                product.productprice = int.Parse(dr["productprice"].ToString());
                product.productimageurl = dr["productimageurl"].ToString();
                product.productquantity = int.Parse(dr["productquantity"].ToString());
                l.Add(product);
            }
            return l;
        }
        internal Boolean SaveUser(UserModel user)
        {
            cmd = new SqlCommand("select * from UserModel where email = '" + user.email + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();

            if (dr.HasRows)
            {
                con.Close();
                return false;
            }
            else
            {
                con.Close();
                cmd = new SqlCommand("insert into UserModel Values('" + user.email + "','" + user.password + "','" + user.username + "'," +
                    "'" + user.mobileNumber + "',1,'USER') ", con);
                con.Open();
                int rowsaffected = cmd.ExecuteNonQuery();
                con.Close();
                if (rowsaffected > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
         

        }
        //summary: to chekc the particular user exist in databse or not
        internal List<string> checkUser(LoginModel user)
        {
            List<string> li = new List<string>();
            cmd = new SqlCommand("select * from UserModel where email = '" + user.email + "' and password COLLATE Latin1_General_CS_AS = '" + user.password + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();

            if (dr.HasRows)
            {
                dr.Read();
                li.Add("true");
                li.Add(dr["role"].ToString());
                li.Add(dr["userId"].ToString());
                con.Close();
                return li;

            }
            else
            {
                con.Close();
                li.Add("false");
                return li;
            }

        }
    }
}