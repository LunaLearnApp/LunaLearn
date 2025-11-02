using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace LunaLearn.Localization;

public static class LunaLearnLocalizationConfigurer
{
    public static void Configure(ILocalizationConfiguration localizationConfiguration)
    {
        localizationConfiguration.Sources.Add(
            new DictionaryBasedLocalizationSource(LunaLearnConsts.LocalizationSourceName,
                new XmlEmbeddedFileLocalizationDictionaryProvider(
                    typeof(LunaLearnLocalizationConfigurer).GetAssembly(),
                    "LunaLearn.Localization.SourceFiles"
                )
            )
        );
    }
}
