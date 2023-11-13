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
    public class PresentationsController : ControllerBase
    {
        private readonly MMCContext _context;

        public PresentationsController(MMCContext context)
        {
            _context = context;
        }

        // GET: api/Presentations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Presentation>>> GetPresentations()
        {
          if (_context.Presentations == null)
          {
              return NotFound();
          }
            return await _context.Presentations.ToListAsync();
        }

        // GET: api/Presentations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Presentation>> GetPresentation(int id)
        {
          if (_context.Presentations == null)
          {
              return NotFound();
          }
            var presentation = await _context.Presentations.FindAsync(id);

            if (presentation == null)
            {
                return NotFound();
            }

            return presentation;
        }

        // PUT: api/Presentations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPresentation(int id, Presentation presentation)
        {
            if (id != presentation.PresentationID)
            {
                return BadRequest();
            }

            _context.Entry(presentation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PresentationExists(id))
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

        // POST: api/Presentations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Presentation>> PostPresentation(Presentation presentation)
        {
          if (_context.Presentations == null)
          {
              return Problem("Entity set 'MMCContext.Presentations'  is null.");
          }
            _context.Presentations.Add(presentation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPresentation", new { id = presentation.PresentationID }, presentation);
        }

        // DELETE: api/Presentations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePresentation(int id)
        {
            if (_context.Presentations == null)
            {
                return NotFound();
            }
            var presentation = await _context.Presentations.FindAsync(id);
            if (presentation == null)
            {
                return NotFound();
            }

            _context.Presentations.Remove(presentation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PresentationExists(int id)
        {
            return (_context.Presentations?.Any(e => e.PresentationID == id)).GetValueOrDefault();
        }
    }
}
