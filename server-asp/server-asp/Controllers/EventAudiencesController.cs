using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_asp.Entities;

namespace server_asp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventAudiencesController : ControllerBase
    {
        private readonly MMCContext _context;

        public EventAudiencesController(MMCContext context)
        {
            _context = context;
        }

        // GET: api/EventAudiences
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventAudience>>> GetEventAudiences()
        {
          if (_context.EventAudiences == null)
          {
              return NotFound();
          }
            return await _context.EventAudiences.ToListAsync();
        }

        // GET: api/EventAudiences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventAudience>> GetEventAudience(int id)
        {
          if (_context.EventAudiences == null)
          {
              return NotFound();
          }
            var eventAudience = await _context.EventAudiences.FindAsync(id);

            if (eventAudience == null)
            {
                return NotFound();
            }

            return eventAudience;
        }

        // PUT: api/EventAudiences/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEventAudience(int id, EventAudience eventAudience)
        {
            if (id != eventAudience.EventAudienceID)
            {
                return BadRequest();
            }

            _context.Entry(eventAudience).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventAudienceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EventAudiences
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EventAudience>> PostEventAudience(EventAudience eventAudience)
        {
          if (_context.EventAudiences == null)
          {
              return Problem("Entity set 'MMCContext.EventAudiences'  is null.");
          }
            _context.EventAudiences.Add(eventAudience);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEventAudience", new { id = eventAudience.EventAudienceID }, eventAudience);
        }

        // DELETE: api/EventAudiences/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEventAudience(int id)
        {
            if (_context.EventAudiences == null)
            {
                return NotFound();
            }
            var eventAudience = await _context.EventAudiences.FindAsync(id);
            if (eventAudience == null)
            {
                return NotFound();
            }

            _context.EventAudiences.Remove(eventAudience);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventAudienceExists(int id)
        {
            return (_context.EventAudiences?.Any(e => e.EventAudienceID == id)).GetValueOrDefault();
        }
    }
}
