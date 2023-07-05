using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
namespace AmazePack
{

    internal class AmazePackDL
    {
        SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=AmazePack;trusted_connection=false;Persist Security Info =False;Encrypt=False");
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;
        SqlDataReader dr = null;
internal string checkQuantityBeforePaying(string userId)
        {
            string result = "";
            cmd = new SqlCommand("select * from OrderModel where userId = '" + userId + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                SqlConnection con1 = new SqlConnection(@"Data Source = DESKTOP-N54RL2R\SQLEXPRESS01;Initial Catalog=AmazePack;Integrated Security=true");
                SqlCommand cmd1 = new SqlCommand("select quantity from ProductModel where productName = '"+dr["productName"]+"'", con1);
                con1.Open();
                SqlDataReader dr1 = cmd1.ExecuteReader();
                dr1.Read();
                if(int.Parse(dr1["quantity"].ToString()) < int.Parse(dr["quantity"].ToString()))
                {
                    result += "'" + dr["productName"] + "'";
                }
                con1.Close();
            }
            con.Close();
            return(result);
;        }
        internal void deleteOrderAndCartItems(string userId)
        {
            cmd = new SqlCommand("select * from OrderModel where userId = '" + userId + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                SqlConnection con1 = new SqlConnection(@"Data Source = DESKTOP-N54RL2R\SQLEXPRESS01;Initial Catalog=AmazePack;Integrated Security=true");
                SqlCommand cmd1 = new SqlCommand("update productModel set quantity = quantity - " + dr["quantity"] + "where productName = '" + dr["productName"] + "'", con1);
                con1.Open();
                cmd1.ExecuteNonQuery();
                con1.Close();
            }
            con.Close();
            cmd = new SqlCommand("update OrderModel set status = 'ordered' where userId = '"+userId+"' and status = 'active' ",con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
            cmd = new SqlCommand("delete CartModel where userId = '"+userId+"'",con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}