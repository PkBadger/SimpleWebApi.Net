using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ApiWebApp.Models
{
    public class Department
    {
        [Key]
        public int id { get; set; }

        public string Name { get; set; }

        public virtual List<Employe> Employes { get; set; }

    }
}