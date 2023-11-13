using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Audience", Schema = "dbo")]
    public class Audience
    {
        [Column("AudienceID")]
        public int AudienceID { get; set; }

        [Column("Occupation")]
        public string Occupation { get; set; }

        [Column("UserID")]
        public int UserID { get; set; }
    }
}
