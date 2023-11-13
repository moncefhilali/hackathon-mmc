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
    public class EventSpeakersController : ControllerBase
    {
        private readonly MMCContext _context;

        public EventSpeakersController(MMCContext context)
        {
            _context = context;
        }

        // GET: api/EventSpeakers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventSpeaker>>> GetEventSpeakers()
        {
          if (_context.EventSpeakers == null)
          {
              return NotFound();
          }
            return await _context.EventSpeakers.ToListAsync();
        }

        // GET: api/EventSpeakers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventSpeaker>> GetEventSpeaker(int id)
        {
          if (_context.EventSpeakers == null)
          {
              return NotFound();
          }
            var eventSpeaker = await _context.EventSpeakers.FindAsync(id);

            if (eventSpeaker == null)
            {
                return NotFound();
            }

            return eventSpeaker;
        }

        // PUT: api/EventSpeakers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEventSpeaker(int id, EventSpeaker eventSpeaker)
        {
            if (id != eventSpeaker.EventSpeakerID)
            {
                return BadRequest();
            }

            _context.Entry(eventSpeaker).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventSpeakerExists(id))
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

        // POST: api/EventSpeakers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EventSpeaker>> PostEventSpeaker(EventSpeaker eventSpeaker)
        {
          if (_context.EventSpeakers == null)
          {
              return Problem("Entity set 'MMCContext.EventSpeakers'  is null.");
          }
            _context.EventSpeakers.Add(eventSpeaker);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEventSpeaker", new { id = eventSpeaker.EventSpeakerID }, eventSpeaker);
        }

        // DELETE: api/EventSpeakers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEventSpeaker(int id)
        {
            if (_context.EventSpeakers == null)
            {
                return NotFound();
            }
            var eventSpeaker = await _context.EventSpeakers.FindAsync(id);
            if (eventSpeaker == null)
            {
                return NotFound();
            }

            _context.EventSpeakers.Remove(eventSpeaker);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventSpeakerExists(int id)
        {
            return (_context.EventSpeakers?.Any(e => e.EventSpeakerID == id)).GetValueOrDefault();
        }
    }
}
