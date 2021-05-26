using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace apiLilab.Models.DbModels
{
    public partial class TbProducto
    {
        [Key]
        public int IdProducto { get; set; }
        public string NombreProducto { get; set; }
        public string DescripcionProducto { get; set; }
        public double PrecioProducto { get; set; }
        public int StockProducto { get; set; }
        public string ImagenProducto { get; set; }
        public int IdCategoria { get; set; }

        public virtual TbCategorium IdCategoriaNavigation { get; set; }
    }
}
