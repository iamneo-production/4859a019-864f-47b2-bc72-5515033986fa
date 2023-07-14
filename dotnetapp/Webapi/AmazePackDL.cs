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
            cmd = new SqlCommand("select * from ProductModel", con);
            adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            con.Open();
            adapter.Fill(dt);
            con.Close();
            foreach (DataRow dr in dt.Rows)
            {
                ProductModel product = new ProductModel();
                product.id = int.Parse(dr["id"].ToString());
                product.productId = dr["productId"].ToString();
                product.productName = dr["productName"].ToString();
                product.price = dr["price"].ToString();
                product.imageurl = dr["imageurl"].ToString();
                product.description = dr["description"].ToString();
                product.quantity = dr["quantity"].ToString();
                l.Add(product);
            }
            return l;
        }
        //summary :  to retrive all the products for users page 
        internal List<CartModel> GetHomeProduct(string id)
        {
            List<CartModel> l = new List<CartModel>();
            cmd = new SqlCommand("select * from ProductModel as p left join (select * from CartModel where userId = '"+ id +"') as c on p.productName = c.productName ", con);
            adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            con.Open();
            adapter.Fill(dt);
            con.Close();
            foreach (DataRow dr in dt.Rows)
            {
                CartModel product = new CartModel();
                product.id = int.Parse(dr["id"].ToString());
                product.productId = dr["productId"].ToString();
                product.productName = dr["productName"].ToString();
                product.price = dr["price"].ToString();
                product.imageurl = dr["imageurl"].ToString();
                product.description = dr["description"].ToString();
                product.quantity = int.Parse(dr["quantity"].ToString());
                if (dr.IsNull("cartItemID"))
                {
                    product.cartItemID = "0";
                }
                else
                {
                    product.cartItemID = dr["cartItemID"].ToString();
                }
                
                l.Add(product);
            }
            return l;
        }
        // summary : to obtain the particular details of product based on id
        internal List<string> ProductEditData(int id)
        {
            List<string> li = new List<string>();
            cmd = new SqlCommand("select * from ProductModel where id = " + id, con);
            con.Open();
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                li.Add(reader["productName"].ToString());
                li.Add(reader["price"].ToString());
                li.Add(reader["description"].ToString());
                li.Add(reader["imageurl"].ToString());
                li.Add(reader["quantity"].ToString());
            }

            return li;
        }
        // summary : to add a new product to the product database
        internal string ProductSave(ProductModel p)
        {
            cmd = new SqlCommand("insert into ProductModel " +
                "values('" + p.productName + "','" + p.price + "','" + p.description + "','" + p.imageurl + "','" + p.quantity + "')", con);
            con.Open();
            int rowseffect = cmd.ExecuteNonQuery();
            con.Close();
            if (rowseffect > 0)
            {
                return "Record inserted Successfully";
            }
            else
            {
                return "Record not inserted";
            }
        }
        // summary : to edit the particular product details
        internal string ProductEditSave(int id, ProductModel p)
        {
            cmd = new SqlCommand("update ProductModel set productName = '" + p.productName + "', price = '"
                + p.price + "', imageurl = '" + p.imageurl + "', quantity = '" + p.quantity + "', description = '"+p.description+"' where id = " + id, con);
            con.Open();
            int rowseffect = cmd.ExecuteNonQuery();
            con.Close();
            if (rowseffect > 0)
            {
                return "Record updated successfully";
            }
            else
            {
                return "Record updation not successfull";
            }
        }
        //summary : to delete  the particular product .
        internal string ProductDelete(int id)
        {
            cmd = new SqlCommand("delete ProductModel where id = " + id, con);
            con.Open();
            int rowseffect = cmd.ExecuteNonQuery();
            con.Close();
            if (rowseffect > 0)
            {
                return "Record deleted successfully";
            }
            else
            {
                return "Record deletion not successfull";
            }
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