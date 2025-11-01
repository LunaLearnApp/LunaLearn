using Abp.Authorization;
using LunaLearn.Authorization.Roles;
using LunaLearn.Authorization.Users;

namespace LunaLearn.Authorization;

public class PermissionChecker : PermissionChecker<Role, User>
{
    public PermissionChecker(UserManager userManager)
        : base(userManager)
    {
    }
}
