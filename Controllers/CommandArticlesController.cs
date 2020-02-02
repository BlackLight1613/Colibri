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
        //private Command Command { get; set; }

        public ActionResult Create(Command command)
        {
            List<Unity> Unities = db.Unities.ToList();
            //Command = command;
            ViewData["Unities"] = Unities;
            ViewData["Command"] = command;
            if (command == null)
                RedirectToAction("Index");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ArticleList(int CommandId)
        {
            //A voir https://stackoverflow.com/questions/27896202/pass-table-value-from-view-to-controller-mvc/27896825#27896825
            //Récupératon de la commande 
            Command command = db.Commands.Find(CommandId);
            System.Diagnostics.Debug.WriteLine("OnPostArticleList déclenché. Commande en cours => "+ command.Supplier.Name);
            return null;
        }
    }
}