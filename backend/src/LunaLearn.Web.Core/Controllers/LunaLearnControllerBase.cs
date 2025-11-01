using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace LunaLearn.Controllers
{
    public abstract class LunaLearnControllerBase : AbpController
    {
        protected LunaLearnControllerBase()
        {
            LocalizationSourceName = LunaLearnConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
