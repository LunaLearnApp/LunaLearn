using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using LunaLearn.EntityFrameworkCore;
using LunaLearn.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace LunaLearn.Web.Tests;

[DependsOn(
    typeof(LunaLearnWebMvcModule),
    typeof(AbpAspNetCoreTestBaseModule)
)]
public class LunaLearnWebTestModule : AbpModule
{
    public LunaLearnWebTestModule(LunaLearnEntityFrameworkModule abpProjectNameEntityFrameworkModule)
    {
        abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
    }

    public override void PreInitialize()
    {
        Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(LunaLearnWebTestModule).GetAssembly());
    }

    public override void PostInitialize()
    {
        IocManager.Resolve<ApplicationPartManager>()
            .AddApplicationPartsIfNotAddedBefore(typeof(LunaLearnWebMvcModule).Assembly);
    }
}