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
    public class ProductoController : ControllerBase
    {
        private readonly lilabContext context;

        public ProductoController(lilabContext context)
        {
            this.context = context;
        }

        // GET: api/<ProductoController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.TbProductos.ToList());
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ProductoController>/5
        [HttpGet("{id}", Name = "GetProducto")]
        public ActionResult Get(int id)
        {
            try
            {
                var producto = context.TbProductos.FirstOrDefault(p => p.IdProducto == id);
                return Ok(producto);
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ProductoController>/5
        [HttpGet("cat/{id}", Name = "GetProductoxCategoria")]
        public ActionResult GetxCat(int id) 
        {
            try 
            {
                var producto = context.TbProductos.OrderBy(c => c.IdCategoria == id).ToList();
                return Ok(producto);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<ProductoController>
        [HttpPost]
        public ActionResult Post([FromBody] TbProducto producto)
        {
            try
            {
                context.TbProductos.Add(producto);
                context.SaveChanges();
                return CreatedAtRoute("GetProducto", new { id = producto.IdProducto }, producto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<ProductoController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] TbProducto producto)
        {
            try
            {
                if(producto.IdProducto == id)
                {
                    context.Entry(producto).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetProducto", new { id = producto.IdProducto }, producto);
                } else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ProductoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var producto = context.TbProductos.FirstOrDefault(p => p.IdProducto == id);
                if (producto != null) 
                {
                    context.TbProductos.Remove(producto);
                    context.SaveChanges();
                    return Ok(id);
                } else
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
