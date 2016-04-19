using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ApiWebApp.Models
{
    public class Employe
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Position { get; set; }

        public int DeparmentId { get; set; }

        [ForeignKey("DeparmentId")]
        public virtual Department Deparment { get; set; }
    }
}