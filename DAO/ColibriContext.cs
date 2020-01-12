using Colibri.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Colibri.DAO
{
    public class ColibriContext:DbContext
    {
        public ColibriContext():base("ColibriContext")
        {

        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public DbSet<Colibri.Models.Supplier> Suppliers { get; set; }
        public DbSet<Command> Commands { get; set; }
    }
}