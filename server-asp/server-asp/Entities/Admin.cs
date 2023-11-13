using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Admin", Schema = "dbo")]
    public class Admin
    {
        [Column("AdminID")]
        public int AdminID { get; set; }

        [Column("UserID")]
        public int UserID { get; set; }
    }
}
