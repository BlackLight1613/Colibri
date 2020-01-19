using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Colibri.DAO;
using Colibri.Models;

namespace Colibri.Controllers
{
    public class CommandsController : Controller
    {
        private ColibriContext db = new ColibriContext();

        

        // GET: Commands
        public ActionResult Index(string searchSupplier)
        {
            var commands = db.Commands.OrderByDescending(q=>q.Date);
            if (!string.IsNullOrEmpty(searchSupplier))
            {
                var filterCommands = commands.Where(q => q.Supplier.Name.Contains(searchSupplier));
                return View(filterCommands.ToList());
            }
            else
                return View(commands.ToList());
        }

        // GET: Commands/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Command command = db.Commands.Find(id);
            if (command == null)
            {
                return HttpNotFound();
            }
            return View(command);
        }

        // GET: Commands/Create
        public ActionResult Create()
        {
            List<Supplier> Suppliers = db.Suppliers.ToList();
            ViewData["Suppliers"] = Suppliers;
            return View();
        }

        // POST: Commands/Create
        // Afin de déjouer les attaques par sur-validation, activez les propriétés spécifiques que vous voulez lier. Pour 
        // plus de détails, voir  https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Date,Comment")] Command PartialCommand, int CommandSupplierId, DateTime CommandDate)
        {

            Supplier selectedSupplier = db.Suppliers.Find(CommandSupplierId);

            Command command = new Command { 
                Date = CommandDate.Date,
                Comment = PartialCommand.Comment,
                Supplier = selectedSupplier
            };
            
            if (ModelState.IsValid)
            {
                db.Commands.Add(command);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            
            return View(command);
        }

        // GET: Commands/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Command command = db.Commands.Find(id);
            if (command == null)
            {
                return HttpNotFound();
            }
            return View(command);
        }

        // POST: Commands/Edit/5
        // Afin de déjouer les attaques par sur-validation, activez les propriétés spécifiques que vous voulez lier. Pour 
        // plus de détails, voir  https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Date,Comment")] Command command)
        {
            if (ModelState.IsValid)
            {
                db.Entry(command).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(command);
        }

        // GET: Commands/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Command command = db.Commands.Find(id);
            if (command == null)
            {
                return HttpNotFound();
            }
            return View(command);
        }

        // POST: Commands/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Command command = db.Commands.Find(id);
            db.Commands.Remove(command);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
