using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Presentation", Schema = "dbo")]
    public class Presentation
    {
        [Column("PresentationID")]
        public int PresentationID { get; set; }

        [Column("EventID")]
        public int EventID { get; set; }

        [Column("Title")]
        public string Title { get; set; }

        [Column("Description")]
        public string Description { get; set; }

        [Column("FileURL")]
        public string FileURL { get; set; }

        [ForeignKey("EventID")]
        public Event Event { get; set; }
    }
}
