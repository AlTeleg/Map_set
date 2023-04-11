import Team from '../team';

describe('Team', () => {
    const team = new Team();

    test('add function test', () => {
        const char1 = { name: 'Name' };
        function addName() {
            team.add(char1);
        }
        expect(typeof team.add).toBe('function');
        addName();
        expect(team.members.size).toBe(1);
        expect(addName).toThrow('Такой персонаж уже есть в команде!');
        expect(addName).toThrow(new Error('Такой персонаж уже есть в команде!'));
    });

    test('addAll function test', () => {
        team.members.clear();
        team.addAll({ name: 'Name' }, { name: 'Name2' });
        expect(team.members.size).toBe(1);
      });

    test('toArray function test', () => {
      team.members.clear();
      expect(typeof team.toArray).toBe('function');
      expect(team.toArray()).toStrictEqual([]);
    });
});
