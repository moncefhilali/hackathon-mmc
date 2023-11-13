using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("EventSpeaker", Schema = "dbo")]
    public class EventSpeaker
    {
        [Column("EventSpeakerID")]
        public int EventSpeakerID { get; set; }

        [Column("EventID")]
        public int EventID { get; set; }

        [Column("SpeakerID")]
        public int SpeakerID { get; set; }

        [ForeignKey("EventID")]
        public Event Event { get; set; }

        [ForeignKey("SpeakerID")]
        public Speaker Speaker { get; set; }
    }
}
