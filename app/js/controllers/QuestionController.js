questApp.controller('QuestionController',
    function QuestionController($scope) {

        $scope.question = {
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2022',
            answers:
                [{
                    text: 'AngularJS!',
                    author: 'Вова Сидоров',
                    date: '20/10/2022',
                    rate: 2
                }, {
                    text: 'AngularJS лучше всех',
                    author: 'Олег Кузнецов',
                    date: '20/10/2022',
                    rate: 0
                }, {
                    text: 'фигасе квестшен',
                    author: 'Неизвестный',
                    date: '22/10/2022',
                    rate: 0
                }]
        },

            $scope.voteUp = function (answer) {
                answer.rate++;
            };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)