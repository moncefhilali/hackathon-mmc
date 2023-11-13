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
    public class AudiencesController : ControllerBase
    {
        private readonly MMCContext _context;

        public AudiencesController(MMCContext context)
        {
            _context = context;
        }

        // GET: api/Audiences
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Audience>>> GetAudiences()
        {
          if (_context.Audiences == null)
          {
              return NotFound();
          }
            return await _context.Audiences.ToListAsync();
        }

        // GET: api/Audiences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Audience>> GetAudience(int id)
        {
          if (_context.Audiences == null)
          {
              return NotFound();
          }
            var audience = await _context.Audiences.FindAsync(id);

            if (audience == null)
            {
                return NotFound();
            }

            return audience;
        }

        // PUT: api/Audiences/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAudience(int id, Audience audience)
        {
            if (id != audience.AudienceID)
            {
                return BadRequest();
            }

            _context.Entry(audience).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AudienceExists(id))
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

        // POST: api/Audiences
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Audience>> PostAudience(Audience audience)
        {
          if (_context.Audiences == null)
          {
              return Problem("Entity set 'MMCContext.Audiences'  is null.");
          }
            _context.Audiences.Add(audience);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAudience", new { id = audience.AudienceID }, audience);
        }

        // DELETE: api/Audiences/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAudience(int id)
        {
            if (_context.Audiences == null)
            {
                return NotFound();
            }
            var audience = await _context.Audiences.FindAsync(id);
            if (audience == null)
            {
                return NotFound();
            }

            _context.Audiences.Remove(audience);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AudienceExists(int id)
        {
            return (_context.Audiences?.Any(e => e.AudienceID == id)).GetValueOrDefault();
        }
    }
}
