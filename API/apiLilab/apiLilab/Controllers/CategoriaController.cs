using apiLilab.Models.DbModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace apiLilab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {

        private readonly lilabContext context;

        public CategoriaController(lilabContext context)
        {
            this.context = context;
        }

        // GET: api/<CategoriaController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.TbCategoria.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<CategoriaController>/5
        [HttpGet("{id}", Name = "GetCategoria")]
        public ActionResult Get(int id)
        {
            try
            {
                var categoria = context.TbCategoria.FirstOrDefault(p => p.IdCategoria == id);
                return Ok(categoria);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<CategoriaController>
        [HttpPost]
        public ActionResult Post([FromBody] TbCategorium categoria)
        {
            try
            {
                context.TbCategoria.Add(categoria);
                context.SaveChanges();
                return CreatedAtRoute("GetCategoria", new { id = categoria.IdCategoria }, categoria);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CategoriaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] TbCategorium categoria)
        {
            try
            {
                if (categoria.IdCategoria == id)
                {
                    context.Entry(categoria).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetProducto", new { id = categoria.IdCategoria }, categoria);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<CategoriaController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var categoria = context.TbCategoria.FirstOrDefault(p => p.IdCategoria == id);
                if (categoria != null)
                {
                    context.TbCategoria.Remove(categoria);
                    context.SaveChanges();
                    return Ok(id);
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
