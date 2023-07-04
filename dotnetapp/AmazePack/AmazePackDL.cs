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
        internal List<string> checkUser(LoginModel user)
        {
            List<string> li = new List<string>();
            cmd = new SqlCommand("select * from UserModel where Email = '" + user.Email + "' and Password COLLATE Latin1_General_CS_AS = '" + user.Password + "'", con);
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