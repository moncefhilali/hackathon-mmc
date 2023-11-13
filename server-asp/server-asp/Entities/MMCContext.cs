using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace server_asp.Entities
{
    public class MMCContext : DbContext
    {
        public MMCContext(DbContextOptions<MMCContext> dbContextOptions) : base(dbContextOptions)
        {
            try
            {
                var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if (databaseCreator != null)
                {
                    if (!databaseCreator.CanConnect()) databaseCreator.Create();
                    if (!databaseCreator.HasTables()) databaseCreator.CreateTables();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }


        // DbSet for each entity
        public DbSet<Partner> Partners { get; set; }
        public DbSet<Sponsor> Sponsors { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Speaker> Speakers { get; set; }
        public DbSet<Audience> Audiences { get; set; }
        public DbSet<EventSpeaker> EventSpeakers { get; set; }
        public DbSet<EventAudience> EventAudiences { get; set; }
        public DbSet<Presentation> Presentations { get; set; }
    }
}
