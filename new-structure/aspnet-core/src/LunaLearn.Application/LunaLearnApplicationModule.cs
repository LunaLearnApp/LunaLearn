using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using LunaLearn.Authorization;

namespace LunaLearn;

[DependsOn(
    typeof(LunaLearnCoreModule),
    typeof(AbpAutoMapperModule))]
public class LunaLearnApplicationModule : AbpModule
{
    public override void PreInitialize()
    {
        Configuration.Authorization.Providers.Add<LunaLearnAuthorizationProvider>();
    }

    public override void Initialize()
    {
        var thisAssembly = typeof(LunaLearnApplicationModule).GetAssembly();

        IocManager.RegisterAssemblyByConvention(thisAssembly);

        Configuration.Modules.AbpAutoMapper().Configurators.Add(
            // Scan the assembly for classes which inherit from AutoMapper.Profile
            cfg => cfg.AddMaps(thisAssembly)
        );
    }
}
