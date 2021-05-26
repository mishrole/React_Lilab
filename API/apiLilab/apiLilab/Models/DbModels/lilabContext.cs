using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace apiLilab.Models.DbModels
{
    public partial class lilabContext : DbContext
    {
        public lilabContext()
        {
        }

        public lilabContext(DbContextOptions<lilabContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbCategorium> TbCategoria { get; set; }
        public virtual DbSet<TbProducto> TbProductos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=mysql;database=lilab", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.21-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_0900_ai_ci");

            modelBuilder.Entity<TbCategorium>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .HasName("PRIMARY");

                entity.ToTable("tb_categoria");

                entity.Property(e => e.IdCategoria).HasColumnName("id_categoria");

                entity.Property(e => e.NombreCategoria)
                    .IsRequired()
                    .HasMaxLength(30)
                    .HasColumnName("nombre_categoria");
            });

            modelBuilder.Entity<TbProducto>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("PRIMARY");

                entity.ToTable("tb_producto");

                entity.HasIndex(e => e.IdCategoria, "tb_producto_fk_tb_categoria");

                entity.Property(e => e.IdProducto).HasColumnName("id_producto");

                entity.Property(e => e.DescripcionProducto)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("descripcion_producto");

                entity.Property(e => e.IdCategoria).HasColumnName("id_categoria");

                entity.Property(e => e.ImagenProducto)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("imagen_producto");

                entity.Property(e => e.NombreProducto)
                    .IsRequired()
                    .HasMaxLength(30)
                    .HasColumnName("nombre_producto");

                entity.Property(e => e.PrecioProducto).HasColumnName("precio_producto");

                entity.Property(e => e.StockProducto).HasColumnName("stock_producto");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.TbProductos)
                    .HasForeignKey(d => d.IdCategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_producto_fk_tb_categoria");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
