export const isValidDate = (day:number, month:number, year:number) => {
    // Verifica se o ano, mês e dia são válidos de forma básica
    if (year < 0 || month < 1 || month > 12 || day < 1) {
      return false;
    }
  
    // Definimos os dias máximos para cada mês
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Verificação de ano bissexto para ajustar fevereiro
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
    if (isLeapYear && month === 2) {
      // Se for ano bissexto, fevereiro tem 29 dias
      return day <= 29;
    }
  
    // Para os outros meses, verificamos o limite de dias do mês correspondente
    return day <= daysInMonth[month - 1];
  }