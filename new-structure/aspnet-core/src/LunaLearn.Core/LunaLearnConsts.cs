using LunaLearn.Debugging;

namespace LunaLearn;

public class LunaLearnConsts
{
    public const string LocalizationSourceName = "LunaLearn";

    public const string ConnectionStringName = "Default";

    public const bool MultiTenancyEnabled = true;


    /// <summary>
    /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
    /// </summary>
    public static readonly string DefaultPassPhrase =
        DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "72acec5223d84a16936570161f3b6cbf";
}
