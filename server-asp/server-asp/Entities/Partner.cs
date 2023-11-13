using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Partner", Schema = "dbo")]
    public class Partner
    {
        [Column("PartnerID")]
        public int PartnerID { get; set; }

        [Column("Name")]
        public string Name { get; set; } = string.Empty;

        [Column("LogoURL")]
        public string LogoURL { get; set; } = string.Empty;
    }
}
