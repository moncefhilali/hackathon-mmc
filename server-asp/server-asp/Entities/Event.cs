using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Event", Schema = "dbo")]
    public class Event
    {
        [Column("EventID")]
        public int EventID { get; set; }

        [Column("Title")]
        public string Title { get; set; } = string.Empty;

        [Column("Image")]
        public string Image { get; set; } = string.Empty;

        [Column("Description")]
        public string Description { get; set; } = string.Empty;

        [Column("Date")]
        public DateTime Date { get; set; }

        [Column("Address")]
        public string Address { get; set; } = string.Empty;

        [Column("City")]
        public string City { get; set; } = string.Empty;

        [Column("Category")]
        public string Category { get; set; } = string.Empty;

        [Column("SponsorID")]
        public int SponsorID { get; set; }

        [Column("PartnerID")]
        public int PartnerID { get; set; }

        [Column("AccessType")]
        public string AccessType { get; set; }

        [Column("Type")]
        public string Type { get; set; }

        [Column("MaxAudiences")]
        public int MaxAudiences { get; set; }

        [Column("Status")]
        public string Status { get; set; }
    }
}
