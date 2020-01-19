using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Colibri.Models
{
    public class Command
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [DataType(DataType.MultilineText)]
        public string Comment { get; set; }
        public virtual Supplier Supplier { get; set; }
    }
}