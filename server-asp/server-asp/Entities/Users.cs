using System.ComponentModel.DataAnnotations.Schema;
using server_asp.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;

namespace server_asp.Entities
{
    [Table("Users", Schema = "dbo")]
    public class User
    {
        [Column("UserID")]
        public int UserID { get; set; }

        [Column("FirstName")]
        public string FirstName { get; set; } = string.Empty;

        [Column("LastName")]
        public string LastName { get; set; } = string.Empty;

        [Column("Password")]
        public string Password { get; set; } = string.Empty;

        [Column("UserType")]
        public string UserType { get; set; } = string.Empty;
    }

}