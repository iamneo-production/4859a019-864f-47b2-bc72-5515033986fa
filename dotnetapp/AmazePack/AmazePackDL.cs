using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace AmazePack
{

    internal class AmazePackDL
    {
        SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=AmazePack;trusted_connection=false;Persist Security Info =False;Encrypt=False");
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;
        SqlDataReader dr = null;
         internal Boolean SaveUser(UserModel user)
        {
            cmd = new SqlCommand("select * from UserModel where Email = '" + user.Email + "'", con);
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
                cmd = new SqlCommand("insert into UserModel Values('" + user.Email + "','" + user.Password + "','" + user.username + "'," +
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
    }
}