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
internal void SaveProduct(UserModel user)
        {
            cmd = new SqlCommand("delete OrderModel where userId = '" + user.userId +"'",con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
            cmd = new SqlCommand("select * from CartModel where userId  = '"+  user.userId+"'",con);
            con.Open();
            adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            con.Close();
            con.Open();
            foreach(DataRow dr in dt.Rows) 
            {
                int totalprice = int.Parse(dr["quantity"].ToString()) * (int.Parse(dr["price"].ToString()));
                var productname = dr["productName"].ToString();
                int quantity = int.Parse(dr["quantity"].ToString());
                var price = dr["price"].ToString();
                cmd = new SqlCommand("insert into OrderModel values('" + user.userId + "','" + productname + "','" + totalprice + "'," + quantity + ",'active','" + price + "')", con);
                cmd.ExecuteNonQuery();
                
            }
            con.Close();
            
        }
        internal List<OrderModel> GetUserProducts(string userId)
        {
            List<OrderModel> _orderlist = new List<OrderModel>();
            cmd = new SqlCommand("select * from OrderModel where userId  = '" + userId +"'", con);
            con.Open();
            adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            con.Close();
            foreach(DataRow dr in dt.Rows)
            {
                OrderModel orders = new OrderModel();
                orders.id = int.Parse(dr["id"].ToString());
                orders.orderId = dr["orderId"].ToString();
                orders.userId = dr["userId"].ToString();
                orders.productName = dr["productName"].ToString();
                orders.quantity = int.Parse(dr["quantity"].ToString());
                orders.status = dr["status"].ToString();
                orders.price = dr["price"].ToString();
                orders.totalPrice = dr["totalPrice"].ToString();
                _orderlist.Add(orders);
            }
            return _orderlist;
        }
        internal List<OrderModel> GetOrders()
        {
            List<OrderModel> _orderlist = new List<OrderModel>();
            cmd = new SqlCommand("select * from OrderModel as o inner join UserModel as u on o.userId = u.userId ", con);
            con.Open();
            adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            con.Close();
            foreach (DataRow dr in dt.Rows)
            {
                OrderModel orders = new OrderModel();
                orders.id = int.Parse(dr["id"].ToString());
                orders.orderId = dr["orderId"].ToString();
                orders.userId = dr["userId"].ToString();
                orders.productName = dr["productName"].ToString();
                orders.quantity = int.Parse(dr["quantity"].ToString());
                orders.status = dr["status"].ToString();
                orders.price = dr["price"].ToString();
                orders.totalPrice = dr["totalPrice"].ToString();
                orders.username = dr["username"].ToString();
                _orderlist.Add(orders);
            }
            return _orderlist;
        }
    }
}  