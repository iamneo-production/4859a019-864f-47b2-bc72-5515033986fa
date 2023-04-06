using Microsoft.AspNetCore.Mvc;
using Moq;
using WebApp.Controllers;
using WebApp.Infrastructure;
using WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using Xunit;
 
namespace WebAppTest
{
    public class ProductControllerTest
    {
        [Fact]
        public void Test_GET_AllProducts()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.Products).Returns(Multiple());
            var controller = new ProductController(mockRepo.Object);
 
            // Act
            var result = controller.Get();
 
            // Assert
            var model = Assert.IsAssignableFrom<IEnumerable<Product>>(result);
            Assert.Equal(3, model.Count());
        }
 
        private static IEnumerable<Product> Multiple()
        {
            var r = new List<Product>();
            r.Add(new Product()
            {
                productId = 01,
                imageUrl = "beetroot.com",
                productName = "beetroot",
                price = "35",
                description = "fresh vegetables",
                quantity = "30"
            });
            r.Add(new Product()
            {
                productId = 02,
                imageUrl = "beetroot.com",
                productName = "beetroot",
                price = "35",
                description = "fresh vegetables",
                quantity = "30"
            });
            r.Add(new Product()
            {
                productId = 03,
                imageUrl = "beetroot.com",
                productName = "beetroot",
                price = "35",
                description = "fresh vegetables",
                quantity = "30"
            });
            return r;
        }

        [Fact]
        public void Test_POST_AddProduct()
        {
            // Arrange
            Product r = new Product()
            {
                productId = 04,
                imageUrl = "beetroot.com",
                productName = "beetroot",
                price = "35",
                description = "fresh vegetables",
                quantity = "30"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.AddProduct(It.IsAny<Product>())).Returns(r);
            var controller = new ProductController(mockRepo.Object);
        
            // Act
            var result = controller.Post(r);
        
            // Assert
            var product = Assert.IsType<Product>(result);
            Assert.Equal(04, product.productId);
            Assert.Equal("beetroot.com", product.imageUrl);
            Assert.Equal("beetroot", product.productName);
            Assert.Equal("35", product.price);
            Assert.Equal("fresh vegetables", product.description);
            Assert.Equal("30", product.quantity);

        }

        [Fact]
        public void Test_PUT_UpdateProduct()
        {
            // Arrange
            Product r = new Product()
            {
                productId = 01,
                imageUrl = "beetroot.com",
                productName = "carrot",
                price = "35",
                description = "fresh vegetables",
                quantity = "30"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.UpdateProduct(It.IsAny<Product>())).Returns(r);
            var controller = new ProductController(mockRepo.Object);
        
            // Act
            var result = controller.Put(r);
        
            // Assert
            var product = Assert.IsType<Product>(result);
            Assert.Equal(01, product.productId);
            Assert.Equal("beetroot.com", product.imageUrl);
            Assert.Equal("carrot", product.productName);
            Assert.Equal("35", product.price);
            Assert.Equal("fresh vegetables", product.description);
            Assert.Equal("30", product.quantity);
        }

        [Fact]
        public void Test_DELETE_Product()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.DeleteProduct(It.IsAny<int>())).Verifiable();
            var controller = new ProductController(mockRepo.Object);
        
            // Act
            controller.Delete(3);
        
            // Assert
            mockRepo.Verify();
        }
    }
}
