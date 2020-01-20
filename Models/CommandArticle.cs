using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Colibri.Models
{
    public class CommandArticle
    {
        [Key]
        public Command Command { get; set; }
        [Key]
        public List<Article> Articles { get; set; }
        [Key]
        public Unity Unity { get; set; }
        [Key]
        public int Quantity { get; set; }

    }
}