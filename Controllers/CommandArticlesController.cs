using Colibri.DAO;
using Colibri.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Colibri.Controllers
{
    public class CommandArticlesController :Controller
    {
        private ColibriContext db = new ColibriContext();

        public ActionResult Create(Command command)
        {
            List<Unity> Unities = db.Unities.ToList();
            ViewData["Unities"] = Unities;
            ViewData["Command"] = command;
            if (command == null)
                RedirectToAction("Index");
            return View();
        }
    }
}