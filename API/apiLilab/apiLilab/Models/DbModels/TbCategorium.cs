using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace apiLilab.Models.DbModels
{
    public partial class TbCategorium
    {
        public TbCategorium()
        {
            TbProductos = new HashSet<TbProducto>();
        }

        [Key]
        public int IdCategoria { get; set; }
        public string NombreCategoria { get; set; }

        public virtual ICollection<TbProducto> TbProductos { get; set; }
    }
}
