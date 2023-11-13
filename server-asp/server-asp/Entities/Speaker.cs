using System.ComponentModel.DataAnnotations.Schema;

namespace server_asp.Entities
{
    [Table("Speaker", Schema = "dbo")]
    public class Speaker
    {
        [Column("SpeakerID")]
        public int SpeakerID { get; set; }

        [Column("UserID")]
        public int UserID { get; set; }

        [Column("Image")]
        public string Image { get; set; }

        [Column("MCT")]
        public bool MCT { get; set; }

        [Column("MVP")]
        public bool MVP { get; set; }

        [Column("SocialLinks")]
        public string SocialLinks { get; set; }

        [Column("Bio")]
        public string Bio { get; set; }

        [Column("Specialization")]
        public string Specialization { get; set; }

    }
}
