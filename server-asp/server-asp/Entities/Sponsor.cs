using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Sponsor", Schema = "dbo")]
    public class Sponsor
    {
        [Column("SponsorID")]
        public int SponsorID { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("LogoURL")]
        public string LogoURL { get; set; }
    }

}
