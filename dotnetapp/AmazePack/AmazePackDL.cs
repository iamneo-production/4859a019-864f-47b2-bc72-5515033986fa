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
        internal List<CartModel> showCart(string userId)
        {
            List<CartModel> li = new List<CartModel>();

            cmd = new SqlCommand("select * from CartModel as c inner join ProductModel as p on c.productName = p.productName" +
                " where userId =  '" + userId + "' ", con);
            con.Open();
            dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                CartModel cart = new CartModel();
                cart.cartItemID = dr["cartItemID"].ToString();
                cart.userId = dr["userId"].ToString();
                cart.productName = dr["productName"].ToString();
                cart.quantity = int.Parse(dr["quantity"].ToString());
                cart.price = dr["price"].ToString();
                cart.imageurl = dr["imageurl"].ToString();
                li.Add(cart);
            }
            con.Close();
            return li;
        }
        //summary: to add the product to cart 
        internal Boolean addToCart(CartModel cart)
        {
            cmd = new SqlCommand("insert into CartModel values('" + cart.userId + "','" + cart.productName + "'" +
                "," + cart.quantity + ", '" + cart.price + "')", con);
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
        // summary : to add the specific quantity required for the product
        internal dynamic editQuantity(string cartItemId, CartModel cart)
        {
            List<CartModel> li = new List<CartModel>();
            cmd = new SqlCommand("select * from ProductModel as p inner join CartModel as c on p.productName = c.productName" +
                " where cartItemID = '" + cartItemId + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();
            dr.Read();
            string productquantity = dr["quantity"].ToString();
            con.Close();
            if (cart.quantity > int.Parse(productquantity))
            {

                return ("This Products doesn't deliever this amount of quantity");
            }
            else
            {
                con.Open();
                cmd = new SqlCommand("update CartModel set quantity = " + cart.quantity + " where cartItemID =  '" + cartItemId + "'", con);
                int rowsaffected = cmd.ExecuteNonQuery();
                con.Close();
                if (rowsaffected > 0)
                {
                    li = showCart(cart.userId);
                }
                return (li);
            }
        }
        //summary: to delete the cart item
        internal Boolean Delete(string cartItemId)
        {
            cmd = new SqlCommand("delete CartModel where cartItemID = '" + cartItemId + "'", con);
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
        //summary to add cart items to orders 
}
}