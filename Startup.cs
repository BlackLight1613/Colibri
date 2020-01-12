using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Colibri.Startup))]
namespace Colibri
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
