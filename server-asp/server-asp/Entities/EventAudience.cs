using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("EventAudience", Schema = "dbo")]
    public class EventAudience
    {
        [Column("EventAudienceID")]
        public int EventAudienceID { get; set; }

        [Column("EventID")]
        public int EventID { get; set; }

        [Column("AudienceID")]
        public int AudienceID { get; set; }
    }
}
