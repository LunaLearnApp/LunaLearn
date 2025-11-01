using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using LunaLearn.Configuration;
using LunaLearn.EntityFrameworkCore;
using LunaLearn.Migrator.DependencyInjection;
using Castle.MicroKernel.Registration;
using Microsoft.Extensions.Configuration;

namespace LunaLearn.Migrator;

[DependsOn(typeof(LunaLearnEntityFrameworkModule))]
public class LunaLearnMigratorModule : AbpModule
{
    private readonly IConfigurationRoot _appConfiguration;

    public LunaLearnMigratorModule(LunaLearnEntityFrameworkModule abpProjectNameEntityFrameworkModule)
    {
        abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

        _appConfiguration = AppConfigurations.Get(
            typeof(LunaLearnMigratorModule).GetAssembly().GetDirectoryPathOrNull()
        );
    }

    public override void PreInitialize()
    {
        Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
            LunaLearnConsts.ConnectionStringName
        );

        Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        Configuration.ReplaceService(
            typeof(IEventBus),
            () => IocManager.IocContainer.Register(
                Component.For<IEventBus>().Instance(NullEventBus.Instance)
            )
        );
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(LunaLearnMigratorModule).GetAssembly());
        ServiceCollectionRegistrar.Register(IocManager);
    }
}
