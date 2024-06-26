document.addEventListener('DOMContentLoaded', () => {
    // ИНИЦИАЛИЗАЦИЯ КАЛЕНДАРЕЙ

    // основной календарь
    const mainCalendarId = document.querySelector("#mainCalendar")
    const mainCalendar = new VanillaCalendar(mainCalendarId, {
        settings: {
            type: 'default',
            selection: {
                day: 'single',
                month: true,
                // time: true,
                holidays: ['2024-06-20'],
            },
            visibility: {
                weekNumbers: true,
                weekend: true,
                today: true,
              },
        },
        actions: {
            clickDay(e, self) {
                console.log('clickDay', self)
            },
            clickWeekNumber(e, number, days, year, self) {
                console.log('clickWeekNumber', days)
            },
        },
        popups: {
            '2024-06-28': {
                modifier: '',
                html: `<div>
                    <u><b>12:00 PM</b></u>
                    <p style="margin: 5px 0 0;">Airplane in Las Vegas</p>
                </div>`,
                // or just text
                // html: 'Airplane in Las Vegas',
            },
          }
    });
    mainCalendar.init();

    // календарь для окна добавления/редактирования задачи
    const taskCalendarId = document.querySelector("#taskCalendar")
    const taskCalendar = new VanillaCalendar(taskCalendarId, {
        settings: {
            type: 'default',
            selection: {
                day: 'single',
                month: true,
                holidays: ['2024-06-20'],
            },
            visibility: {
                weekNumbers: true,
                weekend: true,
                today: true,
              },
        },
        actions: {
            clickDay(e, self) {
                console.log('e', e)
                e.target.classList.add('vanilla-calendar-day-check')

                taskWeekNumber = e.target.dataset.calendarWeekNumber
                taskDate = self.selectedDates.toString()
                
                const gsDayNames = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ]
                const date = new Date(taskDate)
                dayOfWeek = gsDayNames[date.getDay()]
            },
        }
    });
    taskCalendar.init();

    // календарь для добавления мероприятий
    const addDateCalendarId = document.querySelector("#addDateCalendar")
    const addDateCalendar = new VanillaCalendar(addDateCalendarId, {
        settings: {
            type: 'default',
            selection: {
                day: 'single',
                month: true,
                // time: true,
                holidays: ['2024-06-20'],
            },
            visibility: {
                weekNumbers: true,
                weekend: true,
                today: true,
              },
        },
        actions: {
            clickDay(e, self) {
                console.log('e', e)
                e.target.classList.add('vanilla-calendar-day-check')
            },
        }
    });
    addDateCalendar.init();

    // определение и сохранение номера текущей недели
    const thisWeek = document.querySelector('.vanilla-calendar-day__btn_today').getAttribute('data-calendar-week-number')
    let weekPlanerWeekNumber = document.querySelector('#weekPlanerListCard').getAttribute('week-number')
    weekPlanerWeekNumber = thisWeek
    localStorage.setItem('weekPlanerWeekNumber', JSON.stringify(weekPlanerWeekNumber))
  });