using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApiWebApp.Models
{
    public class SpaContext: DbContext
    {
        public DbSet<Employe> Employes { get; set; }

        public DbSet<Department> Deparments { get; set; }
    }
}