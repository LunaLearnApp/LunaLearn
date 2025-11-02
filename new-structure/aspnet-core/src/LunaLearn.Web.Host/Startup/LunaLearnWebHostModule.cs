using Abp.Modules;
using Abp.Reflection.Extensions;
using LunaLearn.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace LunaLearn.Web.Host.Startup
{
    [DependsOn(
       typeof(LunaLearnWebCoreModule))]
    public class LunaLearnWebHostModule : AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public LunaLearnWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(LunaLearnWebHostModule).GetAssembly());
        }
    }
}
