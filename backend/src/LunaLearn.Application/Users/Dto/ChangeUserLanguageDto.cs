using System.ComponentModel.DataAnnotations;

namespace LunaLearn.Users.Dto;

public class ChangeUserLanguageDto
{
    [Required]
    public string LanguageName { get; set; }
}